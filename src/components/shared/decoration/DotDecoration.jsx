import dots from "../../../../src/assets/images/layout/dots.png"
export function DotDecoration({ style }) {
  return <img className="absolute hidden md:block" style={style} src={dots} alt="dots"/>;
}
