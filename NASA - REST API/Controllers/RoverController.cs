using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NASA_REST_API.Models;

namespace NASA_REST_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RoverController : ControllerBase
    {
        private readonly AppDbContext _context;

        public RoverController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Rover
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Rover>>> GetRover()
        {            
            List<Rover> result = new List<Rover>();
            result.AddRange(await _context.RoversType1.ToListAsync());
            result.AddRange(await _context.RoversType2.ToListAsync());
            result.AddRange(await _context.RoversType3.ToListAsync());

            return result;
            //return await _context.RoversType1.ToListAsync();
        }
        
        // GET: api/Rover/1
        [HttpGet("{id:int}")]
        public async Task<ActionResult<IEnumerable<Rover>>> GetRover(int id)
        {
            //var result = await _context.Rovers.FindAsync(id);
            List<Rover> result = new List<Rover>();
            result.Add(await _context.RoversType1.FindAsync(id));
            result.Add(await _context.RoversType2.FindAsync(id));
            result.Add(await _context.RoversType3.FindAsync(id));

            if (result == null)
            {
                return NotFound();
            }

            return result;
        }
        
        // GET: api/Rover/Name
        [HttpGet("{name}")]
        public async Task<ActionResult<IEnumerable<Rover>>> GetRover(string name)
        {
            //var result = await _context.Rovers.Where(f => f.Name == name).ToListAsync();
            List<Rover> result = new List<Rover>();
            result.AddRange(await _context.RoversType1.Where(f => f.Name == name).ToListAsync());
            result.AddRange(await _context.RoversType2.Where(f => f.Name == name).ToListAsync());
            result.AddRange(await _context.RoversType3.Where(f => f.Name == name).ToListAsync());

            if (result == null)
            {
                return NotFound();
            }

            return result;
        }

        // GET: api/Rover/Datetime
        [HttpGet("{pubdate:datetime}")]
        public async Task<ActionResult<IEnumerable<Rover>>> GetRover(DateTime pubdate)
        {
            //var result = await _context.Rovers.Where(f => f.EventDate == pubdate).ToListAsync();
            List<Rover> result = new List<Rover>();
            result.AddRange(await _context.RoversType1.Where(f => f.EventDate == pubdate).ToListAsync());
            result.AddRange(await _context.RoversType2.Where(f => f.EventDate == pubdate).ToListAsync());
            result.AddRange(await _context.RoversType3.Where(f => f.EventDate == pubdate).ToListAsync());

            if (result == null)
            {
                return NotFound();
            }

            return result;
        }
    }
}
