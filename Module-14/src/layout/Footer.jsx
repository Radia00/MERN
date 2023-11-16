import SocialLink from "../components/SocialLink";

const Footer = (props) => {
  return (
    <div className="bg-black py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-between">
          <div>
            <h1 className="text-4xl font-bold text-white mb-6">
              {props.footer.logo}
            </h1>
            <p className="text-white mb-10">{props.footer.description}</p>
            <SocialLink footer={props.footer.social} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
