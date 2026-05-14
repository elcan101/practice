using Mvc.Models;

namespace Mvc.ViewModels
{
    public class HomeVM
    {
        public List<Slider>sliders { get; set; } = new List<Slider>();
        public List<Product>products { get; set; } = new List<Product>();
        

    }
}
