import React from "react";
import flagBlack from "../../assets/images/flag-black.png";

export default function About() {
  return (
    <>
      <div
        style={{
          backgroundColor: "#F8E85A",
          height: "80%",
          width: "100%",
          paddingTop: 100,
          paddingLeft: 83,
        }}
      >
        <p
          style={{
            fontSize: 64,
            fontStyle: "italic",
            fontWeight: 800,
            marginBottom: 34,
          }}
        >
          SOBRE NÓS
        </p>
        <div style={{ display: "flex" }}>
          <div style={{ width: "50%" }}>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas
              sit, aspernatur aut odit aut fugit, sed quia consequuntur magni
              dolores eos, qui ratione voluptatem sequi nesciunt, neque porro
              quisquam est, qui dolorem ipsum, quia dolor sit, amet,
              consectetur, adipisci velit, sed quia non numquam eius mod Sed ut
              perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas
              sit, aspernatur aut odit aut fugit, sed quia consequuntur magni
              dolores eos, qui ratione voluptatem sequi nesciunt, neque porro
              quisquam est, qui dolorem ipsum, quia dolor sit, amet,
              consectetur, adipisci velit, sed quia non numquam eius mod Sed ut
              perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas
              sit, aspernatur aut odit{" "}
            </p>
          </div>
          <img
            style={{
              width: 539,
              height: 510,
              position: "relative",
              top: "-140px",
              left: 170,
            }}
            src={flagBlack}
            alt="black flag"
          />
        </div>
      </div>
      <div style={{ height: "198px", backgroundColor: "#353535" }}></div>
    </>
  );
}
