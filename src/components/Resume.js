
// React
import React from 'react';

// MUI 
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Link from '@mui/material/Link';

// Local
import ResumeCard from './ResumeCard';


// ResumePortfolio: A React component that displays a resume/portfolio.
export default function ResumePortfolio({ profile }) {
    return (
        <Box>
            <Grid container spacing={2}>

                {/* Left Column */}
                <Grid item xs={12} md={4}>

                    {/* Profile */}
                    <ResumeCard>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Avatar alt={profile.name} src={profile.avatar} sx={{ width: 100, height: 100 }} />
                            <Typography variant="h5" component="div" sx={{ mt: 2 }}>
                                {profile.name}
                            </Typography>
                            {/* ... other personal information */}
                        </Box>

                        {/* Contact Details */}
                        <Divider sx={{ mt: 2 }} />
                        <List component="nav" dense>
                            {profile.contacts.map((contact, index) => (
                                <ListItemButton key={index}>
                                    <ListItemIcon>
                                        <contact.icon />
                                    </ListItemIcon>
                                    <ListItemText primary={contact.label} secondary={contact.value} />
                                </ListItemButton>
                            ))}
                        </List>
                        <Divider sx={{ mb: 2 }} />

                        {/* Social Media Links */}
                        <Typography variant="h6" component="div" sx={{ textAlign: 'center' }}>
                            Social Media
                        </Typography>
                        <Box sx={{ mt: 2, textAlign: 'center' }}>
                            {profile.socialMedia.map((media, index) => (
                                <IconButton color="primary" key={index} href={media.url} target="_blank">
                                    <media.icon />
                                </IconButton>
                            ))}
                        </Box>
                    </ResumeCard>
                    
                    {/* Skills */}
                    <ResumeCard>
                      <Typography variant="h6" component="div" sx={{ mt: 2 }}>
                              Skills
                      </Typography>
                      <List component="nav" dense>
                          {profile.skills.map((skill, index) => (
                              <ListItemButton key={index}>
                                  <ListItemText primary={skill.category} secondary={skill.skills} />
                              </ListItemButton>
                          ))}
                      </List>
                    </ResumeCard>

                    {/*Certifications*/}
                    <ResumeCard>
                        <Typography variant="h6" component="div" sx={{ mt: 2 }}>
                            Certifications
                        </Typography>
                        {profile.certifications.map((cert, index) => (
                          <React.Fragment key={index}>
                          <Box sx={{ mb: 3 }}>
                              <Link href={cert.link} underline='hover'target='_blank' variant="subtitle1">{cert.title}</Link>
                              <Typography variant="body2" color="text.secondary">{cert.date}</Typography>
                              <Typography variant="body2" sx={{ mt: 1 }}>
                                  {cert.provider}
                              </Typography>
                              <Typography variant="body2" sx={{ mt: 1 }}>
                                  {"Skills: " + cert.skills}
                              </Typography>
                          </Box>

                          {/* Divider but not for single or last item */}
                          {index !== profile.certifications.length - 1 && (
                              <Divider sx={{ mb: 2 }} />
                          )}

                        </React.Fragment>
                        ))}
                    </ResumeCard>
                </Grid>

                {/* Right Column */}
                <Grid item xs={12} md={8}>

                    {/* Education */}
                    <ResumeCard>
                        <Typography variant="h6" component="div">
                            Education
                        </Typography>
                        <Box sx={{ mt: 2 }}>
                            {profile.education.map((education, index) => (
                                <React.Fragment key={index}>
                                    <Box sx={{ mb: 3 }}>
                                        <Typography variant="subtitle1">{education.degree}</Typography>
                                        <Typography variant="body2" color="text.secondary">{education.date}</Typography>
                                        <Typography variant="body2" sx={{ mt: 1 }}>
                                            {education.school}
                                        </Typography>
                                        <Typography variant="body2" sx={{ mt: 1 }}>
                                            {education.gpa}
                                        </Typography>
                                    </Box>

                                    {/* Divider but not for single or last item */}
                                    {index !== profile.education.length - 1 && (
                                        <Divider sx={{ mb: 2 }} />
                                    )}

                                </React.Fragment>
                            ))}
                        </Box>
                    </ResumeCard>

                    {/* Work Experience */}
                    <ResumeCard>
                        <Typography variant="h6" component="div">
                            Projects
                        </Typography>
                        <Box sx={{ mt: 2 }}>
                            {profile.experience.map((experience, index) => (
                                <React.Fragment key={index}>
                                    <Box sx={{ mb: 3 }}>
                                        <Link href={experience.link} underline='hover' target='_blank' variant="subtitle1">{experience.title}</Link>
                                        <Typography variant="body2" color="text.secondary">{experience.date}</Typography>
                                        <Typography variant="body2" sx={{ mt: 1 }}>
                                            {experience.description}
                                        </Typography>
                                    </Box>
                                    <Box sx={{ mb: 0.5, textAlign: "left" }}>
                                      {experience.icons.map((tech, index) => (
                                        <IconButton color="primary" key={index} size='large'>
                                          <tech.icon />
                                        </IconButton>
                                      ))}
                                    </Box>

                                    {/* Divider but not for single or last item */}
                                    {index !== profile.experience.length - 1 && (
                                        <Divider sx={{ mb: 2 }} />
                                    )}
                                </React.Fragment>
                            ))}
                        </Box>
                    </ResumeCard>

                    {/*Extra Curriculars/ Clubs*/}
                    <ResumeCard>
                      <Typography variant="h6" component="div">
                            Extracurriculars
                      </Typography>
                      <Box sx={{ mt: 2 }}>
                        {profile.extracurriculars.map((experience, index) =>(
                          <React.Fragment key={index}>
                            <Box sx={{ mb: 3 }}>
                              <Link
                                variant="subtitle1"
                                href={experience.link}
                                underline="hover"
                                target="_blank"
                              >
                                {experience.title}
                              </Link>
                              <Typography variant="body2" color="text.secondary">{experience.date}</Typography>
                              <Typography variant="body2" sx={{ mt: 1 }}>
                                  {experience.description}
                              </Typography>
                            </Box>

                            {/* Divider but not for single or last item */}
                            {index !== profile.experience.length - 1 && (
                                        <Divider sx={{ mb: 2 }} />
                                    )}
                          </React.Fragment>
                        ))}
                      </Box>
                    </ResumeCard>

                </Grid>
 
            </Grid>
        </Box>
    );
}