import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { Card } from "../app/components/Card/";

export default {
  title: "Card/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const DefaultCard = Template.bind({});
DefaultCard.args = {
  text: "This is a card",
  footerText: "",
  headerText: "",
};
