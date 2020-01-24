using System;
using Microsoft.EntityFrameworkCore;

namespace NASA_REST_API.Models
{
    public class AppDbContext : DbContext
    {
        private DateTime Date;
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {

        }

        public DbSet<RoverType1> RoversType1 { get; set; }
        public DbSet<RoverType2> RoversType2 { get; set; }
        public DbSet<RoverType3> RoversType3 { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            for (int index = 1; index <= 28; index++)
            {
                if (index == 1)
                    Date = new DateTime(2020, 01, 13);
                else if (2 <= index && index <= 3)
                    Date = new DateTime(2020, 01, 14);
                else if (4 <= index && index <= 6)
                    Date = new DateTime(2020, 01, 15);
                else if (7 <= index && index <= 10)
                    Date = new DateTime(2020, 01, 16);
                else if (11 <= index && index <= 15)
                    Date = new DateTime(2020, 01, 17);
                else if (16 <= index && index <= 21)
                    Date = new DateTime(2020, 01, 18);
                else if (22 <= index && index <= 28)
                    Date = new DateTime(2020, 01, 19);

                modelBuilder.Entity<RoverType1>().HasData(new RoverType1
                {
                    Id = index,
                    Name = "Rover Type 1",
                    EventDate = Date,
                    Quantity = index,
                    Wheel = $"Wheel {index}",
                    Speed = $"Speed {index}",
                    Weight = index
                });

                modelBuilder.Entity<RoverType2>().HasData(new RoverType2
                {
                    Id = index,
                    Name = "Rover Type 2",
                    EventDate = Date,
                    Quantity = index,
                    Wheel = $"Wheel {index}",
                    Speed = $"Speed {index}",
                    Weight = index
                });

                modelBuilder.Entity<RoverType3>().HasData(new RoverType3
                {
                    Id = index,
                    Name = "Rover Type 3",
                    EventDate = Date,
                    Quantity = index,
                    Wheel = $"Wheel {index}",
                    Speed = $"Speed {index}",
                    Weight = index
                });
            }
        }
    }
}
