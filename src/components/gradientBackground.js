import { LinearGradient } from "expo-linear-gradient";

export const GradientBackground = ({ children }) => {
    return <LinearGradient
    // Background Linear Gradient
    colors={["#F810EF", "#540992"]}
    style={{
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      height: "100%",
    }}
  ></LinearGradient>;
};

export default GradientBackground;