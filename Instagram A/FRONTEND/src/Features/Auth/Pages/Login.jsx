import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { auth } from "../Hooks/auth-hook";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

let{loginPage} = auth()
let navigate = useNavigate()

async function formSubmit(data) {
  await loginPage(data)
  navigate("/home")
  }

  return (
    <main className="auth-shell">
      <section className="auth-showcase">
        <div className="auth-phone-frame">
          <div className="auth-phone-screen auth-phone-screen-login">
            <div className="feed-card">
              <div className="feed-header">
                <span className="story-avatar" />
                <div>
                  <p>your_day_one_build</p>
                  <small>Fullstack auth connected</small>
                </div>
              </div>
              <div className="feed-preview" />
              <div className="feed-copy">
                <strong>instagram_clone</strong> Login connected to your backend
                cookie + token response.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="auth-panel">
        <div className="auth-card auth-card-login">
          <h1 className="brand-mark">Instagram</h1>

          <form className="auth-form" onSubmit={handleSubmit(formSubmit)} noValidate>
            <div className="auth-field">
              <input
                className={`auth-input ${errors.usernameOrEmail ? "auth-input-error" : ""}`}
                placeholder="Username or email"

                {...register("usernameOrEmail", {required: "Please enter your email or username address.",})}
              />
              {errors.usernameOrEmail && (
                <p className="auth-field-error">{errors.usernameOrEmail.message}</p>
              )}
            </div>

            <div className="auth-field">
              <input
                className={`auth-input ${errors.password ? "auth-input-error" : ""}`}
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: "Please enter your password.",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters long.",
                  },
                })}
              />
              {errors.password && (
                <p className="auth-field-error">{errors.password.message}</p>
              )}
            </div>

            <button className="auth-button" type="submit">
              Log in
            </button>
          </form>

          <div className="auth-divider">
            <span />
            <p>OR</p>
            <span />
          </div>

          <a className="google-link">
            Continue with Google
          </a>

        </div>

        <div className="auth-switch-card">
          Don&apos;t have an account? <Link to="/register">Sign up</Link>
        </div>
      </section>
    </main>
  );
};

export default Login;
