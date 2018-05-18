require! <[mysql fs]>
connection = mysql.createConnection JSON.parse fs.read-file-sync \./option.json
connection.connect();
for i from 1 to 100000
  connection.query "INSERT INTO big_table (id, score) VALUES (#{i}, #{Math.random!})"

# vi:et:sw=2:ts=2
