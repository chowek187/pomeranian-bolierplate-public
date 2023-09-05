import './styles.css';
import { HtmlIcon } from '../Components/Icons/HtmlIcon';
import { TypeScriptIcon } from '../Components/Icons/TypeScriptIcon';
import { JavaScriptIcon } from '../Components/Icons/JavaScriptIcon';
import { ReactIcon } from '../Components/Icons/ReactIcon';
export const TechStack = () => {
  return (
    <div className="html">
      <HtmlIcon />
      <div>html</div>

      <div className="script">
        <TypeScriptIcon />
        <div>type script</div>
      </div>
      <div>
        <JavaScriptIcon />
        <div>java script</div>
      </div>
      <div>
        <ReactIcon />
        <div>react</div>
      </div>
    </div>
  );
};
