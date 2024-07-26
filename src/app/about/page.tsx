"use client";
import React, { useEffect, useState } from "react";

const getRandomDelay = () => Math.random() * 3;
const getRandomDuration = () => 0.5 + Math.random() * (1 - 0.5);

function About() {
  return <div>About</div>;
}

export default About;
