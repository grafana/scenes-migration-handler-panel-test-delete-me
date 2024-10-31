# NOTE

This Repository exists to help debug https://github.com/grafana/grafana/issues/92000

If issue https://github.com/grafana/grafana/issues/92000 is closed/resolved please delete it

## How to test?

- Clone this repostiory
- cd into the repository
- run `npm install`
- run `npm run build`
- run `npm run server`

With error, open: http://localhost:3000/d/ce2jfefjks074f/scenes-migration-test?from=now-6h&to=now&timezone=browser&editPanel=1&scenes=true&orgId=1

Without error, open: http://localhost:3000/d/ce2jfefjks074f/scenes-migration-test?from=now-6h&to=now&timezone=browser&editPanel=1&scenes=false&orgId=1
