select "firstName",
      "lastName"
from "customers"
join "languages" using ("languageId")
join "films" using ("filmId")
join "rentals" using ("rentalId")
where "title" = 'Magic Mallrats';
