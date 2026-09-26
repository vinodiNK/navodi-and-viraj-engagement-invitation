import { useEffect, useState } from "react";
import "./Countdown.css";

function Countdown() {

  const calculateTimeLeft = () => {

    const targetDate = new Date(
      "November 11, 2026 00:00:00"
    ).getTime();

    const now = new Date().getTime();

    const difference = targetDate - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(
        difference / (1000 * 60 * 60 * 24)
      ),

      hours: Math.floor(
        (difference / (1000 * 60 * 60)) % 24
      ),

      minutes: Math.floor(
        (difference / (1000 * 60)) % 60
      ),

      seconds: Math.floor(
        (difference / 1000) % 60
      ),
    };
  };


  const [timeLeft, setTimeLeft] = useState(
    calculateTimeLeft()
  );


  useEffect(() => {

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
    };

  }, []);


  return (
    <div className="countdown">

      <p className="countdown-title">
        COUNTDOWN TO OUR SPECIAL DAY
      </p>

      <div className="countdown-container">

        <div className="countdown-box">
          <span>
            {timeLeft.days}
          </span>

          <small>
            Days
          </small>
        </div>


        <div className="countdown-box">
          <span>
            {String(timeLeft.hours).padStart(2, "0")}
          </span>

          <small>
            Hours
          </small>
        </div>


        <div className="countdown-box">
          <span>
            {String(timeLeft.minutes).padStart(2, "0")}
          </span>

          <small>
            Minutes
          </small>
        </div>


        <div className="countdown-box">
          <span>
            {String(timeLeft.seconds).padStart(2, "0")}
          </span>

          <small>
            Seconds
          </small>
        </div>

      </div>


      <p className="countdown-date">
        11 November 2026
      </p>

    </div>
  );
}

export default Countdown;