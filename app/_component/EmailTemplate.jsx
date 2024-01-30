import {
	Body,
	Button,
	Container,
	Head,
	Hr,
	Html,
	Img,
	Preview,
	Section,
	Text,
} from '@react-email/components';

// export const EmailTemplate = ({
//   userData,
// }) => (
//   <div>
//     {console.log("USERDATA FROM EMAIL TEMPLATE:", userData)}
//     <h1>Welcome, {userData.fullName}!</h1>
//     <p>EMAIL: {userData.email}</p>
//     <p>AMOUNT: ${Number(userData.amount) / 10}</p>
//   </div>
// );


export const EmailTemplate = ({ userData }) => (
	<Html>
		<Head />
		<Preview>
			The Ecommerce Platform For Yout Digital Products search now for your future
		</Preview>
		<Body style={main}>
			<Container style={container}>
				<Img
					src='https://res.cloudinary.com/dbwtucja6/image/upload/v1706448046/thumbnail_Nextjs_Course_2_28235ab2dc.jpg?updatedAt=2024-01-28T13%3A20%3A48.192Z'
					width="320"
					height="280"
					alt="Koala"
					style={logo}
				/>
				<Text style={paragraph}>Hi {userData.fullName},</Text>
				<Text style={paragraph}>
					Thank you purchasing on Our Digital Courses Platform. Click on Below download button to download the all digital content
				</Text>
				<Section style={btnContainer}>
					<Button pX={12} pY={12}
						style={{
							padding: 5,
							paddingLeft: 10,
							paddingRight: 10,
						}}
						href="'https://res.cloudinary.com/dbwtucja6/image/upload/v1706448046/thumbnail_Nextjs_Course_2_28235ab2dc.jpg?updatedAt=2024-01-28T13%3A20%3A48.192Z'">
						Download
					</Button>
				</Section>
				<Text style={paragraph}>
					Best Regards,
					<br />
					The Digital Courses Platform team
				</Text>
				<Hr style={hr} />
				<Text style={footer}>Subscribe to Digital Courses</Text>
			</Container>
		</Body>
	</Html>
);


const main = {
	backgroundColor: '#ffffff',
	fontFamily:
		'-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
	margin: '0 auto',
	padding: '20px 0 48px',
};

const logo = {
	margin: '0 auto',
};

const paragraph = {
	fontSize: '16px',
	lineHeight: '26px',
};

const btnContainer = {
	textAlign: 'center',
};

const button = {
	backgroundColor: '#5F51E8',
	borderRadius: '3px',
	color: '#fff',
	fontSize: '16px',
	textDecoration: 'none',
	textAlign: 'center',
	display: 'block',
};

const hr = {
	borderColor: '#cccccc',
	margin: '20px 0',
};

const footer = {
	color: '#8898aa',
	fontSize: '12px',
};