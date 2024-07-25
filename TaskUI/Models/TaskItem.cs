namespace TaskUI.Models
{
    public class TaskItem
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool IsCompleted { get; set; }
        public double? Latitude { get; set; }
        public double? Longitude { get; set; }
        public int ListId { get; set; }
    }
}
