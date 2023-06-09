# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

Acceptance Criteria
Time Estimate
Implementation Details

1. ### Task: Create new column on Agents table in the database
**Acceptance Criteria**
Agents table has a new column called custom_id that:
  - is unique to a facility
  - cannot be null
  - can be updated to a new value 

**Implementation Details**
- Create new column on Agents table in the database
- Add a uniqueness index constraint on both the facilities_id and the new custom id
- Add a not null constraint on the column
- Add a maximum length constraint(255 chars maybe)
- Set the default value of the custom ID to the database id

Add tests to validate:
- the new id can be updated to a custom value
- a facility cannot have agents with the same custom id
- the custom id cannot be null

Time Estimate: **1 day**


2. ### Task: Update the API endpoint for editing an agent to allow a facility to update the new ID
###### Implementation details
- Include the new field in the params that the API endpoint accepts. Maybe the API uses a filter/array to decide which parameters it accepts

Add tests to validate:
- the custom_id can be updated through the update agents endpoint

**Time estimate**: 1 hour

3. ### Task: Update the `getShiftByFacility` method to include the new id in the Agent metadata
Implementation:
- Fetch the `custom_id` from Agents table and include it in the metadata
- Update the `getShiftByFacility` tests to validate the custom id is included in the metadata

Acceptance Criteria: 
- Calling the getShiftByFacility method returns the new `custom_id`

Time Estimate: **1 day**

4. ### Task: Replace the database id with the custom ID in the `generateReport` function
###### Implementation details
- Update the `generateReport` function to use the new ID
- Update the `generateReport` function tests to check that the custom id is being used and not the database id

**Time Estimate**: half a day