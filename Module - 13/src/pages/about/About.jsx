import WorkShowcase from "./../home/WorkShowcase";
function About() {
  return (
    <div className="container">
      <h1 className="text-center my-4">About me</h1>
      <h1 className="text-center">
        Hello Creative People This is{" "}
        <span className="text-primary d-block">MD. Ashadul Islam</span>
      </h1>
      <h3 className="text-center">I am a Web Developer</h3>
      <p className="text-center">
        I am a Web Developer. I can provide clean code and pixel perfect design.
        I also make website more and more interactive with web animations.
      </p>
      <WorkShowcase />
    </div>
  );
}

export default About;
