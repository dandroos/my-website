import React, { useRef, useState, useEffect } from "react";
// import { Row, Col } from "reactstrap";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";

import * as d3 from "d3";

import { HorizontalBar, defaults } from "react-chartjs-2";

import BackgroundImageOnLoad from "background-image-on-load";

import BottomPadding from "../components/BottomPadding";

import DavePhoto from "../images/dave-optimized.jpeg";

export default function About(props) {
  const skills = useRef(null);

  // useEffect(() => {
  //   var height = 400;
  //   var width = 300;
  //   var barHeight = 30

  //   var xScale = d3
  //     .scaleLinear()
  //     .domain([0, 95])
  //     .range([0, width]);

  //   var chart = d3.select(skills.current)
  //     .attr("height", 400)
  //     .attr("width", "100%")
  //     .attr("viewBox", "0 0 " + width + " " + height);

  //     var bar = chart.selectAll("g")
  //     .data(data)
  //     .enter()
  //     .append("g")
  //     .attr("transform", (d, i) => {
  //       return `translate(0, ${31 * i})`;
  //     });

  //     bar.append("rect")
  //     .attr("x", d => 0)
  //     .attr("width", d => {
  //       console.log(d.value)
  //       return xScale(d.value)
  //     })
  //     .attr("height", d => {
  //       return barHeight;
  //     })

  //     bar.append("text")
  //     .attr("x", (d)=> 5)
  //     .attr('y', barHeight - 10)
  //     .attr('font-size', '.75rem')
  //     .attr('fill', '#fafafa')
  //     .text(d => {
  //       return d.descr;
  //     })

  //     bar.append("text")
  //     .attr("x", (d)=> xScale(d.value) - 5)
  //     .attr('y', barHeight - 10)
  //     .attr('text-anchor', 'end')
  //     .attr('font-size', '.5rem')
  //     .attr('fill', '#fafafa')
  //     .text(d => {
  //       return d.value + "%";
  //     })
  // }, []);

  const [compState, setCompState] = useState({
    images: 0,
    images_loaded: 0
  });

  const PicParaWrapper = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 1rem;
    align-items: center;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      grid-template-columns: auto;
      grid-template-rows: auto auto;
      justify-items: center;
    }
  `;

  defaults.global.defaultFontFamily = "Lato"

  //TODO: More pics
  return (
    <div className="text-center">
      <h2 className="display-3">
        <FormattedMessage id="about.title" defaultMessage="About me" />
      </h2>

      <PicParaWrapper>
        <div className="image-wrap">
          <div
            style={{
              display: "inline-block",
              width: "14rem",
              height: "14rem",
              background: `url(${DavePhoto})`,
              backgroundSize: "cover",
              clipPath: "circle(50% at 50% 50%)"
            }}
          >
            <BackgroundImageOnLoad
              src={DavePhoto}
              onLoadBg={() => {
                props.isReady();
              }}
              onError={err => console.log("error", err)}
            />
          </div>
        </div>
        <div>
          <p className="display-4">
            <FormattedMessage
              id="about.paragraph_heading"
              defaultMessage="I'm a designer / developer based in Fuerteventura, Canary Islands."
            />
          </p>
          <p className="text-justify paragraph-text mb-0">
            <FormattedMessage id="about.paragraph_content" />
          </p>
        </div>
      </PicParaWrapper>

      <div>
        <p className="display-4">
          <FormattedMessage
            id="knowledge.paragraph_heading"
            defaultMessage="I have tried my best to give an honest self-appraisal below. A big part of what I love about development is that there's always something new to learn about it, which is why I would never say 100% for anything!"
          />
        </p>
        <p className="paragraph-text">
          <FormattedMessage
            id="knowledge.paragraph_content"
            defaultMessage="I have tried my best to give an honest self-appraisal below. A big part of what I love about development is that there's always something new to learn about it, which is why I would never say 100% for anything!"
          />
        </p>
        <p>
          <small>
            <FormattedMessage
              id="knowledge.paragraph_tag"
              defaultMessage="Note to self: Must do more Angular projects!"
            />
          </small>
        </p>
        {/* <svg ref={skills} className="chart" /> */}
        <HorizontalBar
          type="horizontal"
          data={{
            labels: [
              "HTML/CSS",
              "JavaScript",
              "React",
              "Node",
              "PHP",
              "React Native",
              "Python",
              "Angular"
            ],
            datasets: [
              {
                data: [95, 95, 90, 80, 80, 70, 60, 20]
              }
            ]
          }}
          options={{
            legend: {
              display: false
            },
            scales: {
              xAxes: [
                {
                  display: true,
                  ticks: {
                    suggestedMin: 0, // minimum will be 0, unless there is a lower value.
                    // OR //
                    suggestedMax: 100,
                    callback: (value)=>{
                      return value + '%'
                    },
                    fontFamily: 'Lato'
                  },
                  
                }
              ],
              yAxes: [
                {
                  display: true,
                  ticks: {
                    suggestedMin: 0, // minimum will be 0, unless there is a lower value.
                    // OR //
                    suggestedMax: 100,
                    
                    fontFamily: 'Lato',
                    
                  
                  }
                  
                }
              ]
            }
          }}
        />
      </div>
      <BottomPadding />
    </div>
  );
}
