import Logo from "../../assets/logo.svg";

export default function HeaderLogo() {
  return (
    <a href="/">
      <img className="h-9" src={Logo} alt="Weather App" />
    </a>
  );
}
