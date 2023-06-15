# Ticket Breakdown

Based on the provided information, the ticket could be broken down into the following sub-tickets with their respective details, acceptance criteria, time/effort estimates, and implementation details:

---

## Ticket 1: Allow Facilities to save custom IDs for Agents

**Acceptance Criteria:**

- Facilities can add and save custom IDs for Agents they work with.
- The custom ID should be associated with the respective Agent in the database.
- The custom ID should be unique per Facility.

**Time/Effort Estimate:** 3.5 hours

**Implementation Details:**

- Modify the Agents table in the database schema to include a new column for storing custom IDs.
- Add an interface or form in the Facility's dashboard where they can input and save custom IDs for their Agents.
- Validate the uniqueness of custom IDs per Facility.
- Implement the necessary backend logic to save and update the custom IDs in the database.

---

## Ticket 2: Update report generation to use custom IDs

**Acceptance Criteria:**

- When generating reports for Facilities, use the custom IDs instead of internal database IDs for Agents.
- The report PDF should display the custom IDs in the appropriate Agent fields.

**Time/Effort Estimate:** 4.5 hours

**Implementation Details:**

- Update the `generateReport` function to fetch the custom IDs associated with Agents from the database.
- Replace the internal database IDs with the corresponding custom IDs in the report generation logic.
- Generate the report PDF with the custom IDs included in the appropriate Agent fields.

---

## Ticket 3: Validate custom IDs during report generation

**Acceptance Criteria:**

- During report generation, validate that the custom IDs provided by the Facility are valid and associated with the respective Agents.
- If an invalid custom ID is encountered, provide appropriate error handling and notification to the Facility.

**Time/Effort Estimate:** 3 hours

**Implementation Details:**

- Implement a validation step during the report generation process to check if the custom IDs provided by the Facility exist and are associated with the correct Agents.
- Handle any validation errors encountered by notifying the Facility and providing clear error messages.

---

## Ticket 4: Update Shift metadata in getShiftsByFacility function

**Acceptance Criteria:**

- When retrieving Shifts for the Facility, include the custom IDs of the associated Agents in the metadata.
- Ensure that the custom IDs are correctly mapped to the respective Agents.

**Time/Effort Estimate:** 2 hour

**Implementation Details:**

- Update the `getShiftsByFacility` function to include the custom IDs of the Agents in the returned Shift metadata.
- Ensure that the custom IDs are correctly associated with the respective Agents in the Shift metadata.

---

## Ticket 5: Provide Facility interface to manage custom IDs

**Acceptance Criteria:**

- Add a new section in the Facility's dashboard to manage and update the custom IDs of their Agents.
- Facilities should be able to edit and save custom IDs for their Agents.

**Time/Effort Estimate:** 4 hours

**Implementation Details:**

- Create a new interface or form in the Facility's dashboard where they can view, edit, and save custom IDs for their Agents.
- Implement the necessary backend logic to update and save the custom IDs in the database.

---
