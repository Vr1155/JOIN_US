USE join_us;

CREATE TABLE users(
    email VARCHAR(255) PRIMARY KEY,
    created_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO users(email) VALUES
('katie34@yahoo.com'), ('Tunde@gmail.com');

-- exercises:
use join_us;

truncate users;
select * from users;

-- Challenge 1: Find the earliest date a user joined:

-- soln:
select created_at as earliest_date from users order by earliest_date limit 1;

-- actual soln:
SELECT 
	DATE_FORMAT(MIN(created_at), "%M %D %Y") as earliest_date
FROM users;

-- Challenge 2: Find the email of the earliest user:

-- my soln:
select email, created_at as earliest_date from users order by earliest_date limit 1;
-- with subquery:
select email, created_at as earliest_date from users 
where created_at = (select created_at as earliest_date from users order by earliest_date limit 1);

-- actual soln:
select * from users
where created_at = (select min(created_at) from users);

-- Challenge 3: Users according to the month they joined:

-- my soln:
select monthname(created_at) as month, count(MONTHNAME(created_at)) as count from users
 group by month order by count desc;
 
 -- actual soln:
 select monthname(created_at) as month, count(*) as count from users
 group by month order by count desc;
 
 -- Challenge 4: count number of users with yahoo emails:
 
-- my soln:
select count(email) as yahoo_users from users where email like '%@yahoo.com';

-- actual soln:
select count(*) as yahoo_users from users
where email like '%@yahoo.com';

-- Challenge 5: Calcuate total number of users for each email host:

-- my soln:
select 
	case
		when email like '%yahoo%' then 'yahoo'
        when email like '%gmail%' then 'gmail'
        when email like '%hotmail%' then 'hotmail'
        else 'other'
	end as provider, 
count(email) as total_users 
from users group by provider;

-- actual soln:

select 
	case
		when email like '%@yahoo.com%' then 'yahoo'
        when email like '%@gmail.com%' then 'gmail'
        when email like '%@hotmail.com%' then 'hotmail'
        else 'other'
	end as provider, 
count(*) as total_users 
from users group by provider order by total_users desc;