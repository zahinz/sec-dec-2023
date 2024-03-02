import { Pressable, Text } from "react-native";

function Button({ variant, children, ...rest }) {
  // variant can be default = solid, outline, ghost
  // tackle the variant using variable reassignment and switch statement

  // DEFAULT
  const defaultStyle = {
    backgroundColor: "blue",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  };
  const defaultTextStyle = {
    color: "white",
    fontWeight: 600,
  };

  // OUTLINE
  const outlineStyle = {
    backgroundColor: "transparent",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "blue",
  };
  const outlineTextStyle = {
    color: "blue",
    fontWeight: 600,
  };

  // GHOST
  const ghostStyle = {
    backgroundColor: "transparent",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  };
  const ghostTextStyle = {
    color: "blue",
    fontWeight: 600,
  };

  // variable reassignment must use let instead of const
  let style = defaultStyle;
  let textStyle = defaultTextStyle;

  // switch statement more suitable for tuple-like comparison
  switch (variant) {
    case "outline":
      // reassign the style and textStyle
      style = outlineStyle;
      textStyle = outlineTextStyle;
      break;
    case "ghost":
      // reassign the style and textStyle
      style = ghostStyle;
      textStyle = ghostTextStyle;
      break;
    default:
      // reassign the style and textStyle
      style = defaultStyle;
      textStyle = defaultTextStyle;
      break;
  }
  //   if (variant === "outline") {
  //     style = outlineStyle;
  //     textStyle = outlineTextStyle;
  //   } else if (variant === "ghost") {
  //     style = ghostStyle;
  //     textStyle = ghostTextStyle;
  //   } else {
  //     style = defaultStyle;
  //     textStyle = defaultTextStyle;
  //   }

  return (
    <Pressable style={style} {...rest}>
      <Text style={textStyle}>{children}</Text>
    </Pressable>
  );
}

export default Button;
