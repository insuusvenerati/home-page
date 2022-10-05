import classNames from "classnames";
import type { AllClassesMap, IconSizes } from "util/styleHelpers";
import { AccordionFooter } from "./AccordionFooter";

export type AccordionHeaderProps = {
  children?: React.ReactNode | React.ReactNode[] | null;
  headerText?: string | null;
  leftIconUrl?: string | null;
  footerText?: string | null;
  headerStyles?: Partial<AllClassesMap> | null;
  footerStyles?: Partial<AllClassesMap> | null;
  iconSize?: IconSizes | null;
};

export const AccordionHeader: React.FC<AccordionHeaderProps> = ({
  children,
  leftIconUrl,
  headerText,
  headerStyles,
  footerText,
  footerStyles,
  iconSize,
}) => {
  return (
    <details>
      <summary className="none">
        <div className="row">
          {leftIconUrl && <img src={leftIconUrl} alt="accordion header" className="circle" />}
          <div className="max">
            <h5 className={classNames({ ...headerStyles })}>{headerText}</h5>
          </div>
          <i className={classNames(iconSize)}>arrow_drop_down</i>
        </div>
      </summary>
      <p>{children}</p>
      <AccordionFooter footerStyles={footerStyles}>{footerText}</AccordionFooter>
    </details>
  );
};
