import Image from "next/image";
import BigPicture from "../../../components/BigPicture";
import Header from "../../../components/Header";
import Layout from "../../../components/Layout";
import Section from "../../../components/Section";

export default function Travellux() {
  return (
    <>
      <Header
        title="Merokket | Showcasing Our Work and Services"
        description="Explore the stunning results of our previous work. See why Merokket is the top choice for expert design and development services"
      />
      <Layout>
        <BigPicture
          imgSrc="/website/travellux/big.png"
          title="TRAVELLUX"
          desc="Travellux is our take on a digital travel journal where travelers could share their personal travel experiences. They could also like and commend their friend&lsquo;s post and travel location."
        />
        <Section className="flex-col -mt-[90px] xl:-mt-0">
          <div className="w-full aspect-[0.501] relative">
            <Image
              src="/website/travellux/collection.png"
              fill
              className="object-cover"
              alt="collection"
            />
          </div>
        </Section>
      </Layout>
    </>
  );
}
