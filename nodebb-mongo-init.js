db.createUser({
  user: 'nodebb',
  pwd: 'nodebb',
  roles: [
    { role: 'readWrite', db: 'nodebb' },
    { role: 'clusterMonitor', db: 'admin' }
  ]
})
