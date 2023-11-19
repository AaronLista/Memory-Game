import React from 'react'

import {ReactComponent as Cat} from "./SVG/cat.svg";
import {ReactComponent as Dog} from "./SVG/dog.svg";
import {ReactComponent as Dove} from "./SVG/dove.svg";
import {ReactComponent as Dragon} from "./SVG/dragon.svg";
import {ReactComponent as Fish} from "./SVG/fish.svg";
import {ReactComponent as Frog} from "./SVG/frog.svg";
import {ReactComponent as Hippo} from "./SVG/hippo.svg";
import {ReactComponent as Spider} from "./SVG/spider.svg";
import {ReactComponent as Question} from "./SVG/question.svg";

export const Icon = ({value}) => {
    const Icons = {
      "cat":<Cat width="80%"/>,
      "dog":<Dog width="80%"/>,
      "dove":<Dove width="80%"/>,
      "dragon":<Dragon width="80%"/>,
      "fish":<Fish width="80%"/>,
      "frog":<Frog width="80%"/>,
      "hippo":<Hippo width="80%"/>,
      "spider":<Spider width="80%"/>,
      "question":<Question width="50%"/>
    }
  return (
    Icons[value]
  )
}
