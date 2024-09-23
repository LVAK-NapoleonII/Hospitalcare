import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

function SpecialtyCard({ image, title, link }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="140" image={image} alt={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Link href={link} target="_blank" rel="noopener">
          Xem thêm
        </Link>
      </CardContent>
    </Card>
  );
}

function SpecialtySection() {
  const specialties = [
    {
      image: "/path/to/your/joint-image.png",
      title: "Cơ Xương Khớp",
      link: "/co-xuong-khop",
    },
    {
      image: "/path/to/your/brain-image.png",
      title: "Thần kinh",
      link: "/than-kinh",
    },
    {
      image: "/path/to/your/digestive-system-image.png",
      title: "Tiêu hóa",
      link: "/tieu-hoa",
    },
  ];

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Bác sĩ nổi bật
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        {specialties.map((specialty, index) => (
          <SpecialtyCard
            key={index}
            image={specialty.image}
            title={specialty.title}
            link={specialty.link}
          />
        ))}
      </Box>
      <Link href="/all-specialties" sx={{ display: "block", marginTop: 2 }}>
        Xem thêm
      </Link>
    </Box>
  );
}

export default SpecialtySection;
