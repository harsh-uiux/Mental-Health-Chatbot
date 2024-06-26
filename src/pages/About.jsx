import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from "react-router-dom";

export default function About() {
    const navigate = useNavigate();
    return (
        <>
            <CssBaseline />
            <Paper
                sx={{
                    padding: "25px",
                }}
                elevation={1}
            >
                <Box >
                    <div style={{ display: "flex", alignItems: "center", marginLeft: "-15px", marginTop: "-12px" }}>
                        <IconButton onClick={() => { navigate("/"); }}>
                            <ArrowBackIosNewIcon />
                        </IconButton>
                        <Typography variant="h4" underline gutterBottom sx={{ fontSize: '2.5rem', fontWeight: 'bold', marginTop: '12px' }}>
                            Help
                        </Typography>
                    </div>


                    <Typography paragraph sx={{ fontSize: '1.2rem', letterSpacing: '-0.04em' }} align="justify">
                        Welcome to Mindflow's Help Page. We are here to assist you in navigating our platform effectively and accessing the support you need.
                    </Typography>
                    <Typography variant="h6" gutterBottom sx={{ fontSize: '1.8rem',textDecoration:'underline' }}>
                        How to Use Mindflow
                    </Typography>
                    <Typography component="ul" sx={{ fontSize: '1.2rem', letterSpacing: '-0.04em' }} >
                        <li>Start a Conversation: Begin by typing your concerns or thoughts into the chat window. Mindflow will respond promptly and engage in a conversation with you.</li>

                        <li>Engage in Meaningful Dialogue:  Feel free to express your emotions, thoughts, and concerns openly. Mindflow is here to provide support and engage in active listening.</li>

                        <li>Explore Resources: Mindflow can provide information on coping strategies, relaxation techniques, and mental health resources. Simply ask for recommendations or guidance on specific topics.</li>

                        <li>Maintain Privacy and Confidentiality: Mindflow does not store any personal information from your conversations in incognito mode. Your privacy is of utmost importance to us.</li>

                    </Typography>
                    <Typography variant="h6" gutterBottom sx={{ fontSize: '1.8rem' ,textDecoration:'underline'}}>
                        Features
                    </Typography>
                    <Typography component="ul" sx={{ fontSize: '1.2rem', letterSpacing: '-0.04em' }} >
                        <li>Synchronize your conversations seamlessly across all your devices.</li>

                        <li>Utilize the export functionality to save and store your conversations conveniently.</li>

                        <li>Safeguard your privacy with the incognito mode, ensuring confidentiality in your private chats.</li>



                    </Typography>
                    <Typography variant="h6" gutterBottom sx={{ fontSize: '1.8rem' ,textDecoration:'underline'}}>
                        Common Questions
                    </Typography>
                    <Typography component="ol" sx={{ fontSize: '1.2rem', letterSpacing: '-0.04em' }} >
                        <li>What can I talk about with Mindflow?</li>

                        <Typography sx={{ fontSize: '1.2rem' }}>You can discuss a wide range of topics related to mental health, emotions, relationships, and coping strategies.</Typography>

                        <li>Is Mindflow a substitute for professional therapy?</li>
                        <Typography sx={{ fontSize: '1.2rem' }}>While Mindflow aims to provide support and guidance, it is not a replacement for professional therapy or medical advice. If you are in crisis or need immediate assistance, please seek help from a qualified mental health professional or contact emergency services.</Typography>

                        <li>How do I end a conversation with Mindflow?</li>
                        <Typography sx={{ fontSize: '1.2rem' }}>You can end the conversation at any time by closing the chat window or typing "Goodbye."</Typography>

                    </Typography>
                    <br />
                    <Typography variant="h4" gutterBottom sx={{ fontSize: '2rem', fontWeight: 'bold' }}>
                        About Mindflow
                    </Typography>
                    <Typography sx={{ fontSize: '1.2rem', letterSpacing: '-0.04em' }} align="justify">
                        A fine-tuned version of <a href="https://huggingface.co/mistralai/Mistral-7B-Instruct-v0.1" style={{ color: "inherit" }} target="_blank" rel="noopener noreferrer">Mistral-7B-Instruct-v0.1</a> on the <a href="https://huggingface.co/datasets/nbertagnolli/counsel-chat" style={{ color: "inherit" }} target="_blank" rel="noopener noreferrer">counsel-chat</a> dataset for mental health counseling conversations. Mindflow aims to provide a safe space for individuals to express their emotions, explore coping strategies, and access valuable resources.

                    </Typography>
                    <br />


                    <Typography variant="h6" gutterBottom sx={{ fontSize: '1.8rem' ,textDecoration:'underline'}}>
                        Contributions
                    </Typography>
                    <Typography sx={{ fontSize: '1.2rem', letterSpacing: '-0.04em' }} >
                        Feel free to contribute by submitting bug fixes, feature enhancements, improvements, or any other valuable additions that can help enhance the functionality and usability of Mindflow. Your contributions are highly appreciated!
                    </Typography>
                    <br />

                    <div style={{ marginTop: 10, display: "flex", justifyContent: "center" }}>
                        <a href="https://github.com/OpenAccess-AI-Collective/axolotl" target="_blank" rel="noopener noreferrer" >

                            <img src="https://raw.githubusercontent.com/OpenAccess-AI-Collective/axolotl/main/image/axolotl-badge-web.png" alt="Built with Axolotl" width="200" height="32" />
                        </a>
                    </div>


                    <footer style={{ width: '100%', textAlign: 'center', marginTop: '1rem' }}>
                        <Typography variant="body1" sx={{ fontSize: '1rem' }}>Empathy in Every Byte

                        </Typography>

                        <Typography >
                            Coded with ❤️ by <a
                                style={{ color: "inherit" }}
                                href="https://github.com/steve-cse"
                                target="_blank" rel="noopener noreferrer"
                            >
                                Steve Boby George
                            </a>
                        </Typography >
                    </footer>
                </Box>
            </Paper>
        </>
    );
}
