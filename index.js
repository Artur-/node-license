const mvn = require("maven").create({
  cwd: ".",
  quiet: true,
});
mvn
  .execute(["package"], {})
  .then(() => {
    console.log("Success");
  })
  .catch(() => {
    console.error("Failed");
  });
