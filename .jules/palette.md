## 2024-05-24 - Accessibility of Range Inputs in Scientific UI
**Learning:** For scientific applications with dynamic parameter controls, adding `aria-valuenow`, `aria-valuemin`, and `aria-valuemax` alongside a properly linked `<label>` ensures screen readers can accurately communicate the current value to users. `aria-hidden="true"` on the visual numeric display avoids redundant readout.
**Action:** Always map range input states to ARIA attributes and hide duplicate visual representations from screen readers to prevent cluttered feedback.
## 2024-03-27 - Parameter Reset Button Accessibility
**Learning:** Adding a reset button to a complex parameters UI requires more than just functionality. It needs `aria-label` for screen readers, `title` for visual tooltips on icon-only buttons, `aria-hidden="true"` on the icon itself, and robust `focus-visible` styling to ensure clear keyboard navigation.
**Action:** Always include this a11y triad (aria-label, title, focus-visible) on icon-only reset or utility buttons in control panels.
## 2024-05-18 - Added skip-to-content and aria-live feedback
**Learning:** Without visually hidden skip links, keyboard users struggle to bypass navigation. Without aria-live feedback, screen reader users miss important state changes like reset actions.
**Action:** Always add skip-to-content links on root containers and aria-live regions for immediate state changes.
