# Future work

## UX

### Actions

- Add a spinner and debouncer to the loader
- Add posthog to track conversion metrics
- A/B test the call-to-action (eg. learn more, connect, talk, free call)
- Better understand users. Perhaps speak directly to customers

### Questions

- Why did the user get on this page?
- What are their hesitations to using Solace? Do we need a reminder or guarantee that this is covered by Medicare?
- Would it help if there was an intercom on this page?
- Would it help if there were reviews about and more information from the advocate?
- Is a structured search interface a good idea? What if they had a natural-language search interface?

## Performance

### Actions

- I would set up metrics and alarms to find out if request duration drops beyond an acceptable threshold (say, 1s)
- If it looks like duration is unacceptable, I would try to find the solution that best fits the needs of Solace and its customers. Tradeoffs include development speed, maintainability, and scalability. It can be as simple as adding vertical compute. This might cost more in the short-term, but it would keep us more flexible as we gain a better understanding of the customer's needs.

## Reliability

### Actions

- I would add alarms to track unexpected errors in the endpoint

### Questions

- What should we do if our endpoint or db is down? We should consider having a fallback source of data, returning a cached page, showing an outage banner, etc.
- What should we do if the advocate does not answer the phone? We should consider redirecting to customer support, sending notifications, suggesting alternative advocates, etc.

## Testing

### Actions

- I would add an e2e test for the happy path
- I'd also like to test modifications in a frozen branch before release. I consider that a good opportunity to reflect and sanity-check.

### Questions

- What level of testing do we need? We probably don't want to add so much testing that we can't edit, but we want to be able to release with confidence
