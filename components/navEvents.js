import React, { useState } from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	Nav,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
} from 'reactstrap';
const EventsBar = props => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<div>
			<Navbar>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="mr-auto" navbar>
						<UncontrolledDropdown nav inNavbar>
							<DropdownToggle nav caret>
								Events
							</DropdownToggle>
							<DropdownMenu>
								<DropdownItem href="/cricket">Indoor Cricket</DropdownItem>
								<DropdownItem href="/volleyball-2019">Women VolleyBall</DropdownItem>
								<DropdownItem href="/badminton2020">Kids Badmintion</DropdownItem>
							</DropdownMenu>
						</UncontrolledDropdown>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
};

export default EventsBar;
