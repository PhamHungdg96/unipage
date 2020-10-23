namespace unipage.Models
{
    using System.ComponentModel.DataAnnotations;
    public class UserModel
    {
        [Key]
        public int ID {get; set;}
        public string Name { get; set; }

        public int? Age { get; set; }
    }
}