/**
 * Brand & component gradient definitions.
 * All colors here are authoritative — update here, update everywhere.
 */
export const gradients = {
  /** Main brand gradient — animated tabs, chat greeting */
  brand: ["#7A00C6", "#B453FE", "#8682FF", "#56B8E2"] as [
    string,
    string,
    ...string[],
  ],

  /** Alternate brand gradient (brighter mid-stop) — Home screen title */
  brandAlt: ["#7A00C6", "#8453FE", "#8682FF", "#56B8E2"] as [
    string,
    string,
    ...string[],
  ],

  /** HomeCard background — "Com a IA" tab */
  cardIA: ["#E4F1FF", "#F2EAFF", "#FCEBFF", "#F6DFFF"] as [
    string,
    string,
    ...string[],
  ],

  /** HomeCard background — "Com tutores" tab */
  cardTutores: ["#F6DFFF", "#EBECFF", "#EAF1FF", "#E4F1FF"] as [
    string,
    string,
    ...string[],
  ],
};

export type Gradients = typeof gradients;
