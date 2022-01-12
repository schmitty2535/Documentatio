# PM2

{% embed url="https://pm2.keymetrics.io/docs/usage/signals-clean-restart" %}

{% embed url="https://pm2.keymetrics.io/docs/usage/application-declaration" %}

{% embed url="https://pm2.io/docs/runtime/guide/process-management" %}

{% embed url="https://pm2.io/docs/runtime/best-practices/graceful-shutdown" %}

{% embed url="https://pm2.keymetrics.io/docs/usage/pm2-api" %}

### Streaming query rows

Sometimes you may want to select large quantities of rows and process each of them as they are received. This can be done like this:

```
var query = connection.query('SELECT * FROM posts');
query
  .on('error', function(err) {
    // Handle error, an 'end' event will be emitted after this as well
  })
  .on('fields', function(fields) {
    // the field packets for the rows to follow
  })
  .on('result', function(row) {
    // Pausing the connnection is useful if your processing involves I/O
    connection.pause();

    processRow(row, function() {
      connection.resume();
    });
  })
  .on('end', function() {
    // all rows have been received
  });
```

Please note a few things about the example above:

* Usually you will want to receive a certain amount of rows before starting to throttle the connection using `pause()`. This number will depend on the amount and size of your rows.
* `pause()` / `resume()` operate on the underlying socket and parser. You are guaranteed that no more `'result'` events will fire after calling `pause()`.
* You MUST NOT provide a callback to the `query()` method when streaming rows.
* The `'result'` event will fire for both rows as well as OK packets confirming the success of a INSERT/UPDATE query.
* It is very important not to leave the result paused too long, or you may encounter `Error: Connection lost: The server closed the connection.` The time limit for this is determined by the [net\_write\_timeout setting](https://dev.mysql.com/doc/refman/5.5/en/server-system-variables.html#sysvar\_net\_write\_timeout) on your MySQL server.

Additionally you may be interested to know that it is currently not possible to stream individual row columns, they will always be buffered up entirely. If you have a good use case for streaming large fields to and from MySQL, I'd love to get your thoughts and contributions on this.

{% embed url="https://github.com/mysqljs/mysql#streaming-query-rows" %}

