import styles from "./ranking.module.css";
import Image from "next/image";
import data from "../../data/currentRanking.json";
import { Fragment } from "react";

export default function RankingPage() {
  return (
    <section className={styles.ranking}>
      <ul className={styles.list}>
        {data.map((person, index) => (
          <Fragment>
            <li className={styles.line} key={person.name}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {/* <span
                  style={{
                    display: "inline-block",
                    width: "2ch",
                    paddingLeft: "0.5rem",
                  }}
                >
                  {(person as any).arrow && (
                    <Image
                      alt="arrow"
                      style={{ width: "20px" }}
                      src={"/" + (person as any).arrow}
                    />
                  )}
                </span> */}
                <p
                  style={{
                    margin: "0 1rem",
                    width: "2ch",
                    display: "inline-block",
                    lineHeight: "2rem",
                    textAlign: "center",
                  }}
                >
                  {index + 1}
                </p>
                <span
                  style={{
                    borderLeft: "solid 2px rgb(150, 150, 150, 0.5)",
                    paddingLeft: "0.5rem",
                    display: "inline-flex",
                    alignItems: "center",
                  }}
                >
                  <Image
                    width={25}
                    height={40}
                    style={{
                      margin: "0 0.5rem 0 0",
                    }}
                    src={"/" + person.head}
                    alt={`${person.name} head`}
                  />
                  {person.name}
                </span>
              </div>
              <div className={styles.score}>
                <span style={{ textAlign: "center" }}>
                  {person.win} - {person.loses}
                </span>
              </div>
            </li>
            {index + 1 === Math.round(data.length / 2) && (
              <hr className={styles.middleSeparation} />
            )}
          </Fragment>
        ))}
      </ul>
    </section>
  );
}
