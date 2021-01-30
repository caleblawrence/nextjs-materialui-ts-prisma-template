import { Keyboard } from "@prisma/client";
import Head from "next/head";
import React from "react";
import prisma from "../lib/prisma";

interface Props {
  keyboards: Keyboard[];
}
const Keyboards = (props: Props) => {
  const { keyboards } = props;

  return (
    <>
      <Head>
        <title>Favorite Keyboards</title>
      </Head>
      <div className="container">
        <h1>Favorite Keyboards</h1>
        {keyboards.map((keyboard) => (
          <div key={keyboard.name} style={{ marginBottom: 20 }}>
            <p style={{ fontSize: 20, margin: 0, padding: 0 }}>
              {keyboard.name}
            </p>
            <p style={{ margin: 0, padding: 0 }}>{keyboard.keyboardName}</p>
            <p style={{ margin: 0, padding: 0 }}>
              {keyboard.keyboardSwitch &&
                keyboard.keyboardSwitch
                  .replace("switches", "")
                  .replace("switch", "")}{" "}
              switches
            </p>
            {keyboard.keyboardLink && (
              <a
                style={{ textDecoration: "underline", color: "blue" }}
                href={keyboard.keyboardLink}
              >
                Link
              </a>
            )}
          </div>
        ))}
      </div>
      <style jsx>{`
        @media only screen and (max-width: 600px) {
          h1 {
            font-size: 30px;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }

        .container {
          margin-right: auto; /* 1 */
          margin-left: auto; /* 1 */

          max-width: 960px; /* 2 */

          padding-right: 10px; /* 3 */
          padding-left: 10px; /* 3 */
        }
      `}</style>
    </>
  );
};

export const getServerSideProps = async () => {
  const keyboards = await prisma.keyboard.findMany();
  return { props: { keyboards } };
};

export default Keyboards;
