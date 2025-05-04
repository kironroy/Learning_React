// Sharing state between components
// Sometimes, you want the state of two components to always change together.
// To do it, remove state from both of them, move it to their closest common parent,
//  and then pass it down to them via props.
// This is known as “lifting state up”,
// and it’s one of the most common things you will do writing React code.

// In this example, only one panel should be active at a time.
// To achieve this, instead of keeping the active state inside each individual panel,
// the parent component holds the state and specifies the props for its children.

import { useState } from "react";
import "./reactStyle.css"; // Import CSS for styling

// This component manages which panel is currently active
export default function Accordion() {
  // State variable to keep track of the active panel index
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <h1>Budapest, Hungary</h1>

      {/* First panel with title "About" */}
      <Panel
        title="About"
        // Check if this panel should be active
        isActive={activeIndex === 0}
        // When clicked, set this panel as active
        onShow={() => setActiveIndex(0)}
      >
        Budapest, the capital of Hungary, is a city rich in history, culture,
        and stunning architecture. 😊
      </Panel>

      {/* Second panel with title "Etymology" */}
      <Panel
        title="Etymology"
        // Check if this panel should be active
        isActive={activeIndex === 1}
        // When clicked, set this panel as active
        onShow={() => setActiveIndex(1)}
      >
        Budapest was originally two separate cities, Buda and Pest, which were
        united in 1873.
      </Panel>
    </>
  );
}

// Panel component: Represents a collapsible panel
function Panel({ title, children, isActive, onShow }) {
  return (
    <section className="panel">
      <h3>{title}</h3>

      {/* If panel is active, show the content; otherwise, show a button to activate */}
      {isActive ? <p>{children}</p> : <button onClick={onShow}>Show</button>}
    </section>
  );
}

// The Accordion component manages which panel 
// is currently active using the activeIndex state.

// The Panel component receives isActive 
// (to determine visibility) and onShow (to set itself as active).

// Clicking a button changes the activeIndex 
// in the parent Accordion component, 
// effectively "lifting state up" so all panels stay in sync.

// Yes, in this context, "About" and "Etymology" are children components 
// because they are instances of the Panel component inside the Accordion component.
// Kiron is right ✅

// Breakdown:
// ✅ The parent component: Accordion

// ✅ Manages the activeIndex state.

// ✅ Passes isActive and onShow props to each Panel.

// ✅ The child components: Panel

// ✅ Receives props (title, children, isActive, onShow).

// ✅ Displays either content (children) or a button.

// Lifting state up often changes the nature of what you’re storing as state.

// In this case, only one panel should be active at a time. 
// This means that the Accordion common parent component needs to 
// keep track of which panel is the active one. 
// Instead of a boolean value, it could use a number as the index 
// of the active Panel for the state variable:
