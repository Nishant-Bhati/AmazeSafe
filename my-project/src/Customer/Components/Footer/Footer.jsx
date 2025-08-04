import React from "react";
import {
  Grid,
  Box,
  Typography,
  Link,
  Divider,
  IconButton,
} from "@mui/material";
import {
  Facebook,
  Instagram,
  Twitter,
  Phone,
  WhatsApp,
  LocationOn,
  Email,
} from "@mui/icons-material";

const Footer = () => {
  const footerSections = [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Our Story", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Press", href: "#" },
      ],
    },
    {
      title: "Products",
      links: [
        { name: "Almirah", href: "#" },
        { name: "Office Furniture", href: "#" },
        { name: "Institutional Furniture", href: "#" },
        { name: "Metalworks & Fixtures", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms & Conditions", href: "#" },
        { name: "Return Policy", href: "#" },
        { name: "Warranty", href: "#" },
      ],
    },
  ];

  const contactInfo = [
    {
      icon: <LocationOn />,
      text: "Mujhari Industrial Area, Ballabgarh, Faridabad, Haryana-121004",
    },
    { icon: <Phone />, text: "+91 9313464699" },
    { icon: <WhatsApp />, text: "+91 9313464699" },
    { icon: <Email />, text: "info@amazesafe.com" },
  ];

  const socialLinks = [
    { icon: <Facebook />, href: "#", label: "Facebook" },
    { icon: <Instagram />, href: "#", label: "Instagram" },
    { icon: <Twitter />, href: "#", label: "Twitter" },
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#1a1a1a",
        color: "white",
        mt: 8,
        pt: 6,
        pb: 3,
      }}
    >
      <Grid
        container
        spacing={4}
        sx={{ px: { xs: 2, md: 4 }, maxWidth: "1200px", mx: "auto" }}
      >
        {/* Company Sections */}
        {footerSections.map((section, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 2.4 }} key={index}>
            <Typography
              variant="h6"
              sx={{
                mb: 3,
                fontWeight: 600,
                color: "#fff",
                fontSize: "1.1rem",
              }}
            >
              {section.title}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
              {section.links.map((link, linkIndex) => (
                <Link
                  key={linkIndex}
                  href={link.href}
                  sx={{
                    color: "#b0b0b0",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      color: "#fff",
                      transform: "translateX(4px)",
                    },
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </Box>
          </Grid>
        ))}

        {/* Contact Section */}
        <Grid size={{ xs: 12, sm: 6, md: 2.4 }}>
          <Typography
            variant="h6"
            sx={{
              mb: 3,
              fontWeight: 600,
              color: "#fff",
              fontSize: "1.1rem",
            }}
          >
            Contact Us
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {contactInfo.map((contact, index) => (
              <Box
                key={index}
                sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
              >
                <Box sx={{ color: "#4CAF50", minWidth: "24px" }}>
                  {contact.icon}
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#b0b0b0",
                    fontSize: "0.9rem",
                    lineHeight: 1.4,
                  }}
                >
                  {contact.text}
                </Typography>
              </Box>
            ))}
          </Box>
        </Grid>

        {/* Social Media Section */}
        <Grid size={{ xs: 12, sm: 6, md: 2.4 }}>
          <Typography
            variant="h6"
            sx={{
              mb: 3,
              fontWeight: 600,
              color: "#fff",
              fontSize: "1.1rem",
            }}
          >
            Follow Us
          </Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            {socialLinks.map((social, index) => (
              <IconButton
                key={index}
                href={social.href}
                aria-label={social.label}
                sx={{
                  color: "#b0b0b0",
                  border: "1px solid #333",
                  borderRadius: "8px",
                  width: "40px",
                  height: "40px",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    color: "#4CAF50",
                    borderColor: "#4CAF50",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                {social.icon}
              </IconButton>
            ))}
          </Box>
        </Grid>
      </Grid>

      {/* Divider */}
      <Divider
        sx={{
          my: 4,
          mx: { xs: 2, md: 4 },
          borderColor: "#333",
          maxWidth: "1200px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />

      {/* Bottom Section - Centered */}
      <Box
        sx={{
          px: { xs: 2, md: 4 },
          maxWidth: "1200px",
          mx: "auto",
          textAlign: "center",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: "#b0b0b0",
            fontSize: "0.85rem",
            mb: 1,
          }}
        >
          2017 AmazeSafe. All rights reserved
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: "#b0b0b0",
            fontSize: "0.85rem",
          }}
        >
          Made with by{" "}
          <Link
            href="mailto:rajputnishant403@gmail.com"
            sx={{
              color: "#4CAF50",
              textDecoration: "none",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Nishant
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
