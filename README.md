# settle-all-promises
Like Promise.all() but lets all promises settle before resolve/reject.

This is an experiment because I kept having situations where Promise.all() would reject and I would be missing data or it would abort requests.

This is a variation on and borrows heavily from https://stackoverflow.com/a/31424853
