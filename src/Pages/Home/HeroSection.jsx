export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Aritra</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Web Designer</span>{" "}
            
          </h1>
          <p className="hero--section-description">
          Crafting engaging digital experiences with HTML, CSS, JavaScript, React, Figma, and UI/UX expertise.
          <br /> Explore my portfolio!
          </p>
        </div>
        <button className="btn btn-primary">Know More</button>
      </div>
      <div className="hero--section--img">
        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/edc3ab78364175.5ca3009cb66a0.gif" alt="Hero Section" />
      </div>
    </section>
  );
}
