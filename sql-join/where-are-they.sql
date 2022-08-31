select "line1",
      "district",
      "name"
      from "addresses"
      join "cities" using ("cityId");
