import React from 'react'
import { BaseProps, DEFAULT_WAI_ARIA_ATTRIBUTE } from '../type'

interface DNAProps extends Omit<BaseProps, 'color'> {}

export default function DNA({
  visible = true,
  width = '80',
  height = '80',
  wrapperClass = '',
  wrapperStyle = {},
  ariaLabel = 'dna-loading',
}: DNAProps) {
  return !visible ? null : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={width}
      height={height}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      className={wrapperClass}
      style={wrapperStyle}
      aria-label={ariaLabel}
      data-testid='dna-svg'
      {...DEFAULT_WAI_ARIA_ATTRIBUTE}
    >
      <circle
        cx="6.451612903225806"
        cy="60.6229"
        r="3.41988"
        fill="rgba(233, 12, 89, 0.5125806451612902)"
      >
        <animate
          attributeName="r"
          keyTimes="0;0.5;1"
          values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
          dur="2s"
          repeatCount="indefinite"
          begin="-0.5s"
        ></animate>
        <animate
          attributeName="cy"
          keyTimes="0;0.5;1"
          values="30.5;69.5;30.5"
          dur="2s"
          repeatCount="indefinite"
          begin="0s"
          keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
          calcMode="spline"
        ></animate>
        <animate
          attributeName="fill"
          keyTimes="0;0.5;1"
          values="rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)"
          dur="2s"
          repeatCount="indefinite"
          begin="-0.5s"
        ></animate>
      </circle>
      <circle cx="6.451612903225806" cy="39.3771" r="2.58012" fill="#46dff0">
        <animate
          attributeName="r"
          keyTimes="0;0.5;1"
          values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
          dur="2s"
          repeatCount="indefinite"
          begin="-1.5s"
        ></animate>
        <animate
          attributeName="cy"
          keyTimes="0;0.5;1"
          values="30.5;69.5;30.5"
          dur="2s"
          repeatCount="indefinite"
          begin="-1s"
          keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
          calcMode="spline"
        ></animate>
        <animate
          attributeName="fill"
          keyTimes="0;0.5;1"
          values="#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0"
          dur="2s"
          repeatCount="indefinite"
          begin="-0.5s"
        ></animate>
      </circle>
      <circle
        cx="16.129032258064512"
        cy="68.1552"
        r="3.17988"
        fill="rgba(233, 12, 89, 0.5125806451612902)"
      >
        <animate
          attributeName="r"
          keyTimes="0;0.5;1"
          values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
          dur="2s"
          repeatCount="indefinite"
          begin="-0.7s"
        ></animate>
        <animate
          attributeName="cy"
          keyTimes="0;0.5;1"
          values="30.5;69.5;30.5"
          dur="2s"
          repeatCount="indefinite"
          begin="-0.2s"
          keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
          calcMode="spline"
        ></animate>
        <animate
          attributeName="fill"
          keyTimes="0;0.5;1"
          values="rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)"
          dur="2s"
          repeatCount="indefinite"
          begin="-0.7s"
        ></animate>
      </circle>
      <circle cx="16.129032258064512" cy="31.8448" r="2.82012" fill="#46dff0">
        <animate
          attributeName="r"
          keyTimes="0;0.5;1"
          values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
          dur="2s"
          repeatCount="indefinite"
          begin="-1.7s"
        ></animate>
        <animate
          attributeName="cy"
          keyTimes="0;0.5;1"
          values="30.5;69.5;30.5"
          dur="2s"
          repeatCount="indefinite"
          begin="-1.2s"
          keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
          calcMode="spline"
        ></animate>
        <animate
          attributeName="fill"
          keyTimes="0;0.5;1"
          values="#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0"
          dur="2s"
          repeatCount="indefinite"
          begin="-0.7s"
        ></animate>
      </circle>
      <circle
        cx="25.806451612903224"
        cy="69.3634"
        r="2.93988"
        fill="rgba(233, 12, 89, 0.5125806451612902)"
      >
        <animate
          attributeName="r"
          keyTimes="0;0.5;1"
          values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
          dur="2s"
          repeatCount="indefinite"
          begin="-0.9s"
        ></animate>
        <animate
          attributeName="cy"
          keyTimes="0;0.5;1"
          values="30.5;69.5;30.5"
          dur="2s"
          repeatCount="indefinite"
          begin="-0.4s"
          keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
          calcMode="spline"
        ></animate>
        <animate
          attributeName="fill"
          keyTimes="0;0.5;1"
          values="rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)"
          dur="2s"
          repeatCount="indefinite"
          begin="-0.9s"
        ></animate>
      </circle>
      <circle cx="25.806451612903224" cy="30.6366" r="3.06012" fill="#46dff0">
        <animate
          attributeName="r"
          keyTimes="0;0.5;1"
          values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
          dur="2s"
          repeatCount="indefinite"
          begin="-1.9s"
        ></animate>
        <animate
          attributeName="cy"
          keyTimes="0;0.5;1"
          values="30.5;69.5;30.5"
          dur="2s"
          repeatCount="indefinite"
          begin="-1.4s"
          keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
          calcMode="spline"
        ></animate>
        <animate
          attributeName="fill"
          keyTimes="0;0.5;1"
          values="#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0"
          dur="2s"
          repeatCount="indefinite"
          begin="-0.9s"
        ></animate>
      </circle>
      <circle
        cx="35.48387096774193"
        cy="65.3666"
        r="2.69988"
        fill="rgba(233, 12, 89, 0.5125806451612902)"
      >
        <animate
          attributeName="r"
          keyTimes="0;0.5;1"
          values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
          dur="2s"
          repeatCount="indefinite"
          begin="-1.1s"
        ></animate>
        <animate
          attributeName="cy"
          keyTimes="0;0.5;1"
          values="30.5;69.5;30.5"
          dur="2s"
          repeatCount="indefinite"
          begin="-0.6s"
          keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
          calcMode="spline"
        ></animate>
        <animate
          attributeName="fill"
          keyTimes="0;0.5;1"
          values="rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)"
          dur="2s"
          repeatCount="indefinite"
          begin="-1.1s"
        ></animate>
      </circle>
      <circle cx="35.48387096774193" cy="34.6334" r="3.30012" fill="#46dff0">
        <animate
          attributeName="r"
          keyTimes="0;0.5;1"
          values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
          dur="2s"
          repeatCount="indefinite"
          begin="-2.1s"
        ></animate>
        <animate
          attributeName="cy"
          keyTimes="0;0.5;1"
          values="30.5;69.5;30.5"
          dur="2s"
          repeatCount="indefinite"
          begin="-1.6s"
          keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
          calcMode="spline"
        ></animate>
        <animate
          attributeName="fill"
          keyTimes="0;0.5;1"
          values="#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0"
          dur="2s"
          repeatCount="indefinite"
          begin="-1.1s"
        ></animate>
      </circle>
      <circle
        cx="45.16129032258064"
        cy="53.8474"
        r="2.45988"
        fill="rgba(233, 12, 89, 0.5125806451612902)"
      >
        <animate
          attributeName="r"
          keyTimes="0;0.5;1"
          values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
          dur="2s"
          repeatCount="indefinite"
          begin="-1.3s"
        ></animate>
        <animate
          attributeName="cy"
          keyTimes="0;0.5;1"
          values="30.5;69.5;30.5"
          dur="2s"
          repeatCount="indefinite"
          begin="-0.8s"
          keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
          calcMode="spline"
        ></animate>
        <animate
          attributeName="fill"
          keyTimes="0;0.5;1"
          values="rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)"
          dur="2s"
          repeatCount="indefinite"
          begin="-1.3s"
        ></animate>
      </circle>
      <circle cx="45.16129032258064" cy="46.1526" r="3.54012" fill="#46dff0">
        <animate
          attributeName="r"
          keyTimes="0;0.5;1"
          values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
          dur="2s"
          repeatCount="indefinite"
          begin="-2.3s"
        ></animate>
        <animate
          attributeName="cy"
          keyTimes="0;0.5;1"
          values="30.5;69.5;30.5"
          dur="2s"
          repeatCount="indefinite"
          begin="-1.8s"
          keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
          calcMode="spline"
        ></animate>
        <animate
          attributeName="fill"
          keyTimes="0;0.5;1"
          values="#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0"
          dur="2s"
          repeatCount="indefinite"
          begin="-1.3s"
        ></animate>
      </circle>
      <circle
        cx="54.838709677419345"
        cy="39.3771"
        r="2.58012"
        fill="rgba(233, 12, 89, 0.5125806451612902)"
      >
        <animate
          attributeName="r"
          keyTimes="0;0.5;1"
          values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
          dur="2s"
          repeatCount="indefinite"
          begin="-1.5s"
        ></animate>
        <animate
          attributeName="cy"
          keyTimes="0;0.5;1"
          values="30.5;69.5;30.5"
          dur="2s"
          repeatCount="indefinite"
          begin="-1s"
          keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
          calcMode="spline"
        ></animate>
        <animate
          attributeName="fill"
          keyTimes="0;0.5;1"
          values="rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)"
          dur="2s"
          repeatCount="indefinite"
          begin="-1.5s"
        ></animate>
      </circle>
      <circle cx="54.838709677419345" cy="60.6229" r="3.41988" fill="#46dff0">
        <animate
          attributeName="r"
          keyTimes="0;0.5;1"
          values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
          dur="2s"
          repeatCount="indefinite"
          begin="-2.5s"
        ></animate>
        <animate
          attributeName="cy"
          keyTimes="0;0.5;1"
          values="30.5;69.5;30.5"
          dur="2s"
          repeatCount="indefinite"
          begin="-2s"
          keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
          calcMode="spline"
        ></animate>
        <animate
          attributeName="fill"
          keyTimes="0;0.5;1"
          values="#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0"
          dur="2s"
          repeatCount="indefinite"
          begin="-1.5s"
        ></animate>
      </circle>
      <circle
        cx="64.51612903225805"
        cy="31.8448"
        r="2.82012"
        fill="rgba(233, 12, 89, 0.5125806451612902)"
      >
        <animate
          attributeName="r"
          keyTimes="0;0.5;1"
          values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
          dur="2s"
          repeatCount="indefinite"
          begin="-1.7s"
        ></animate>
        <animate
          attributeName="cy"
          keyTimes="0;0.5;1"
          values="30.5;69.5;30.5"
          dur="2s"
          repeatCount="indefinite"
          begin="-1.2s"
          keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
          calcMode="spline"
        ></animate>
        <animate
          attributeName="fill"
          keyTimes="0;0.5;1"
          values="rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)"
          dur="2s"
          repeatCount="indefinite"
          begin="-1.7s"
        ></animate>
      </circle>
      <circle cx="64.51612903225805" cy="68.1552" r="3.17988" fill="#46dff0">
        <animate
          attributeName="r"
          keyTimes="0;0.5;1"
          values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
          dur="2s"
          repeatCount="indefinite"
          begin="-2.7s"
        ></animate>
        <animate
          attributeName="cy"
          keyTimes="0;0.5;1"
          values="30.5;69.5;30.5"
          dur="2s"
          repeatCount="indefinite"
          begin="-2.2s"
          keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
          calcMode="spline"
        ></animate>
        <animate
          attributeName="fill"
          keyTimes="0;0.5;1"
          values="#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0"
          dur="2s"
          repeatCount="indefinite"
          begin="-1.7s"
        ></animate>
      </circle>
      <circle
        cx="74.19354838709677"
        cy="30.6366"
        r="3.06012"
        fill="rgba(233, 12, 89, 0.5125806451612902)"
      >
        <animate
          attributeName="r"
          keyTimes="0;0.5;1"
          values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
          dur="2s"
          repeatCount="indefinite"
          begin="-1.9s"
        ></animate>
        <animate
          attributeName="cy"
          keyTimes="0;0.5;1"
          values="30.5;69.5;30.5"
          dur="2s"
          repeatCount="indefinite"
          begin="-1.4s"
          keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
          calcMode="spline"
        ></animate>
        <animate
          attributeName="fill"
          keyTimes="0;0.5;1"
          values="rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)"
          dur="2s"
          repeatCount="indefinite"
          begin="-1.9s"
        ></animate>
      </circle>
      <circle cx="74.19354838709677" cy="69.3634" r="2.93988" fill="#46dff0">
        <animate
          attributeName="r"
          keyTimes="0;0.5;1"
          values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
          dur="2s"
          repeatCount="indefinite"
          begin="-2.9s"
        ></animate>
        <animate
          attributeName="cy"
          keyTimes="0;0.5;1"
          values="30.5;69.5;30.5"
          dur="2s"
          repeatCount="indefinite"
          begin="-2.4s"
          keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
          calcMode="spline"
        ></animate>
        <animate
          attributeName="fill"
          keyTimes="0;0.5;1"
          values="#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0"
          dur="2s"
          repeatCount="indefinite"
          begin="-1.9s"
        ></animate>
      </circle>
      <circle
        cx="83.87096774193547"
        cy="34.6334"
        r="3.30012"
        fill="rgba(233, 12, 89, 0.5125806451612902)"
      >
        <animate
          attributeName="r"
          keyTimes="0;0.5;1"
          values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
          dur="2s"
          repeatCount="indefinite"
          begin="-2.1s"
        ></animate>
        <animate
          attributeName="cy"
          keyTimes="0;0.5;1"
          values="30.5;69.5;30.5"
          dur="2s"
          repeatCount="indefinite"
          begin="-1.6s"
          keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
          calcMode="spline"
        ></animate>
        <animate
          attributeName="fill"
          keyTimes="0;0.5;1"
          values="rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)"
          dur="2s"
          repeatCount="indefinite"
          begin="-2.1s"
        ></animate>
      </circle>
      <circle cx="83.87096774193547" cy="65.3666" r="2.69988" fill="#46dff0">
        <animate
          attributeName="r"
          keyTimes="0;0.5;1"
          values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
          dur="2s"
          repeatCount="indefinite"
          begin="-3.1s"
        ></animate>
        <animate
          attributeName="cy"
          keyTimes="0;0.5;1"
          values="30.5;69.5;30.5"
          dur="2s"
          repeatCount="indefinite"
          begin="-2.6s"
          keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
          calcMode="spline"
        ></animate>
        <animate
          attributeName="fill"
          keyTimes="0;0.5;1"
          values="#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0"
          dur="2s"
          repeatCount="indefinite"
          begin="-2.1s"
        ></animate>
      </circle>
      <circle
        cx="93.54838709677418"
        cy="46.1526"
        r="3.54012"
        fill="rgba(233, 12, 89, 0.5125806451612902)"
      >
        <animate
          attributeName="r"
          keyTimes="0;0.5;1"
          values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
          dur="2s"
          repeatCount="indefinite"
          begin="-2.3s"
        ></animate>
        <animate
          attributeName="cy"
          keyTimes="0;0.5;1"
          values="30.5;69.5;30.5"
          dur="2s"
          repeatCount="indefinite"
          begin="-1.8s"
          keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
          calcMode="spline"
        ></animate>
        <animate
          attributeName="fill"
          keyTimes="0;0.5;1"
          values="rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)"
          dur="2s"
          repeatCount="indefinite"
          begin="-2.3s"
        ></animate>
      </circle>
      <circle cx="93.54838709677418" cy="53.8474" r="2.45988" fill="#46dff0">
        <animate
          attributeName="r"
          keyTimes="0;0.5;1"
          values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
          dur="2s"
          repeatCount="indefinite"
          begin="-3.3s"
        ></animate>
        <animate
          attributeName="cy"
          keyTimes="0;0.5;1"
          values="30.5;69.5;30.5"
          dur="2s"
          repeatCount="indefinite"
          begin="-2.8s"
          keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
          calcMode="spline"
        ></animate>
        <animate
          attributeName="fill"
          keyTimes="0;0.5;1"
          values="#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0"
          dur="2s"
          repeatCount="indefinite"
          begin="-2.3s"
        ></animate>
      </circle>
    </svg>
  )
}
