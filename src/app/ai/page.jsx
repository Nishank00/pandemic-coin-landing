import Image from "next/image";
import modelbg1 from "../../assets/ai/ai03.jpeg";
import modelbg2 from "../../assets/ai/feat04.jpeg";
import modelbg3 from "../../assets/ai/ai02.jpeg";
import modelbg4 from "../../assets/ai/ai01.jpeg";
import model1 from "../../assets/ai/m1_out.webp";
import model2 from "../../assets/ai/m2_out.webp";
import model3 from "../../assets/ai/m3_out.webp";
import model4 from "../../assets/ai/m4_out.webp";
import modeltext1 from "../../assets/ai/t1.png";
import modeltext2 from "../../assets/ai/t2.png";
import modeltext3 from "../../assets/ai/t3.png";
import modeltext4 from "../../assets/ai/t4.png";

export default function Ai() {
  return (
    <div className="flex flex-col bg-pdc-d-gray gap-[40px] md:gap-0 overflow-hidden pt-0 py-[30px] md:pt-[96px] h-fit md:min-h-screen bg_ai">
      <div className="mt-[20px] flex gap-[100px] md:flex-row flex-col">
        <a href="/ai/model1" alt="Mythrill">
          <div className="card_ai">
            <div className="wrapper_ai">
              <Image
                src={modelbg1}
                height={600}
                width={250}
                alt="ai-img"
                className="cover-image_ai"
                quality={100}
              />
            </div>

            <div className="df flex-col font-bold text-xl ">
              <Image
                src={modeltext4}
                height={600}
                width={250}
                alt="ai-img"
                className="title_ai"
                quality={100}
              />
              1. AI HealthScan
            </div>
            
            <Image
              src={model1}
              height={600}
              width={600}
              alt="ai-img"
              className="character_ai"
              quality={100}
            />
          </div>
        </a>

        <a href="/ai/model2" alt="Mythrill">
          <div className="card_ai">
            <div className="wrapper_ai">
              <Image
                src={modelbg2}
                height={600}
                width={250}
                alt="ai-img"
                className="cover-image_ai"
                quality={100}
              />
            </div>

            <div className="df flex-col font-bold text-xl ">
              <Image
                src={modeltext2}
                height={600}
                width={250}
                alt="ai-img"
                className="title_ai"
                quality={100}
              />
              2. AI PEN app
            </div>
            <Image
              src={model2}
              height={600}
              width={600}
              alt="ai-img"
              className="character_ai"
              quality={100}
            />
          </div>
        </a>
      </div>
      <div className=" flex w-full gap-[40px]  md:mt-[-130px] justify-between md:flex-row flex-col">
        <a href="/ai/model3" alt="Mythrill">
          <div className="card_ai">
            <div className="wrapper_ai">
              <Image
                src={modelbg3}
                height={600}
                width={250}
                alt="ai-img"
                className="cover-image_ai"
                quality={100}
              />
            </div>

            <div className="df flex-col font-bold text-xl ">
              <Image
                src={modeltext3}
                height={600}
                width={250}
                alt="ai-img"
                className="title_ai"
                quality={100}
              />
              AI Radar
            </div>

            <Image
              src={model3}
              height={600}
              width={600}
              alt="ai-img"
              className="character_ai"
              quality={100}
            />
          </div>
        </a>
        <a href="/ai/model4" alt="Mythrill">
          <div className="card_ai">
            <div className="wrapper_ai">
              <Image
                src={modelbg4}
                height={600}
                width={250}
                alt="ai-img"
                className="cover-image_ai"
                quality={100}
              />
            </div>
            <div className="df flex-col font-bold text-xl ">
              <Image
                src={modeltext4}
                height={600}
                width={250}
                alt="ai-img"
                className="title_ai"
                quality={100}
              />
              AI AltEng
            </div>
            <Image
              src={model4}
              height={600}
              width={600}
              alt="ai-img"
              className="character_ai"
              quality={100}
            />
          </div>
        </a>
      </div>
    </div>
  );
}
