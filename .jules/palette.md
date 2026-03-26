## 2024-05-24 - Accessibility of Range Inputs in Scientific UI
**Learning:** For scientific applications with dynamic parameter controls, adding `aria-valuenow`, `aria-valuemin`, and `aria-valuemax` alongside a properly linked `<label>` ensures screen readers can accurately communicate the current value to users. `aria-hidden="true"` on the visual numeric display avoids redundant readout.
**Action:** Always map range input states to ARIA attributes and hide duplicate visual representations from screen readers to prevent cluttered feedback.
