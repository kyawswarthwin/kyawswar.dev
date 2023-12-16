const AboutPage = () => {
  return (
    <>
      <h3>About Us</h3>
      <br />
      <p>
        Kyaw Swar LLC is a dynamic and innovative software development company
        dedicated to delivering cutting-edge solutions for businesses across
        diverse industries. With a team of skilled and experienced developers,
        we specialize in crafting custom software applications tailored to meet
        the unique needs and challenges of our clients. Our commitment to
        quality, efficiency, and technological excellence ensures that we
        provide robust and scalable solutions. From web and mobile applications
        to enterprise software, Kyaw Swar LLC empowers businesses to thrive in
        the digital landscape through reliable and transformative software
        development services.
      </p>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
