import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {auth} from '../Hooks/auth-hook.js'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Register = () => {

 let navigate =  useNavigate()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

   let{registers} = auth()

async  function formSubmit(data) {
  let userdata = await registers(data)
    reset();
    navigate("/login")
    
  }

  return (
    <main className="auth-shell auth-shell-register">
      <section className="auth-showcase auth-showcase-register">
        <div className="auth-phone-frame auth-phone-frame-register">
          <div className="auth-phone-screen auth-phone-screen-register">
            <div className="story-badge story-badge-pink" />
            <div className="story-badge story-badge-orange" />
            <div className="story-card">
              <span className="story-avatar" />
              <div>
                <p>Share photos, reels and moments.</p>
                <small>Styled like Instagram, wired to your backend.</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="auth-panel auth-panel-register">
        <div className="auth-card auth-card-register">
          <h1 className="brand-mark">Instagram</h1>
          <p className="auth-subtitle">
            Sign up to see photos and videos from your friends.
          </p>

          <form className="auth-form" onSubmit={handleSubmit(formSubmit)} noValidate>
            <div className="auth-field">
              <input
                className={`auth-input ${errors.username ? "auth-input-error" : ""}`}
                type="text"
                placeholder="Username"
                {...register("username", {
                  required: "Please enter your username.",
                  minLength: {
                    value: 3,
                    message: "Username must be at least 3 characters long.",
                  },
                })}
              />
              {errors.username && (
                <p className="auth-field-error">{errors.username.message}</p>
              )}
            </div>

            <div className="auth-field">
              <input
                className={`auth-input ${errors.email ? "auth-input-error" : ""}`}
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: "Please enter your email address.",
                  pattern: {
                    value: emailPattern,
                    message: "Please enter a valid email address.",
                  },
                })}
              />
              {errors.email && (
                <p className="auth-field-error">{errors.email.message}</p>
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

            <div className="auth-field">
              <input
                className={`auth-input ${errors.fullname ? "auth-input-error" : ""}`}
                type="text"
                placeholder="Full Name"
                {...register("fullname", {
                  required: "Please enter your full name.",
                  minLength: {
                    value: 2,
                    message: "Full name must be at least 2 characters long.",
                  },
                })}
              />
              {errors.fullname && (
                <p className="auth-field-error">{errors.fullname.message}</p>
              )}
            </div>

            <button className="auth-button" type="submit">
              Sign up
            </button>
          </form>

          <p className="auth-note">
            People who use our service may have uploaded your contact information to
            Instagram.
          </p>
        </div>

        <div className="auth-switch-card">
          Have an account? <Link to="/login">Log in</Link>
        </div>
      </section>
    </main>
  );
};

export default Register;
