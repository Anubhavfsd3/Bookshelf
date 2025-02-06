import { Menu } from "antd";
import { Link,Navigate } from 'react-router-dom';

import { 
 HomeOutlined, 
 AreaChartOutlined, 
 AppstoreOutlined, 
 PayCircleOutlined, 
 SettingOutlined,
 BarsOutlined,

} from "@ant-design/icons";
import ProfilePage from "../../pages/ProfilePage";
import BooksPage from "../../pages/BooksPage";
import BooksFormPage from "../../pages/BooksFormPage";
import BookingsPage from "../../pages/BookingsPage";
import BookPage from "../../pages/BookPage";


export default function MenuList ({ darkTheme }) {
    return (
        
            <Menu theme={darkTheme ? 'dark' : 'light'} className="menu-bar">

                <Menu.Item className="mt-1" key="home" icon={<HomeOutlined />}>
                   Home
                </Menu.Item>

                <Menu.Item key="My Bookings" icon={<PayCircleOutlined />}>
                  <Link to="/account/bookings" element={<BookingsPage />} />
                    My Bookings
                </Menu.Item>

                <Menu.Item key="My Accomodations" icon={<AppstoreOutlined />}>
                  <Link to="/account/Books" element={<BooksPage />} />
                    My Accomodations
                </Menu.Item>

                <Menu.SubMenu key="subtasks" icon={<BarsOutlined />}  title="Read Books Online">

                    <Menu.Item key="Atomic Habits">
                        <Link to="/Bookks/6667c1b7fad330174fbb9581" element={<BookPage />} />
                        Atomic Habits
                    </Menu.Item>  

                    <Menu.Item key="Taylor Swift: A Biography from Beginning to End">
                        <Link to="/Bookks/665926e912f80ddd97db606f" element={<BookPage />} />
                        Taylor Swift: A Biography from Beginning to End
                    </Menu.Item>    

                    <Menu.Item key="VagaBond">
                        <Link to="/Bookks/661578ec946e47d836466607" element={<BookPage />} />
                        Vagabond (Vizbig Edition), Vol. 1 
                    </Menu.Item> 

                    <Menu.Item key="1947-1957, India: The Birth of a Republic">
                        <Link to="/Bookks/66684ee178ed59a9e3722f2c" element={<BookPage />} />
                        1947-1957, India: The Birth of a Republic
                    </Menu.Item> 

                    <Menu.Item key="The Psychology of Money">
                        <Link to="/Bookks/6615bde3be705ab9caf765fd" element={<BookPage />} />
                        The Psychology of Money
                    </Menu.Item> 

                    <Menu.Item key="Cricket analytics with cricketr: Third edition Kindle Edition">
                        <Link to="/Bookks/6631235fe8439ef3e4b01496" element={<BookPage />} />
                        Cricket analytics with cricketr: Third Kindle Edition
                    </Menu.Item> 

                    <Menu.Item key="The Wealth Money Can't Buy: The 8 Hidden Habits to Live Your Richest Life Paperback">
                        <Link to="/Bookks/6617fc97ebc2cba12e71506c" element={<BookPage />} />
                        The Wealth Money Can't Buy: The 8 Hidden Habits
                    </Menu.Item> 

                    <Menu.Item key="History Men: Their Quest for India's Past">
                        <Link to="/Bookks/665b608936769adde0b99173" element={<BookPage />} />
                         History Men: Their Quest for India's Past
                    </Menu.Item> 

                    <Menu.SubMenu key="Order the Book" title="Order the Book">
                        <Menu.Item key="Online Booking">Online Booking</Menu.Item>
                        <Menu.Item key="Confirm Booking">Confirm Booking</Menu.Item>
                    </Menu.SubMenu>

                </Menu.SubMenu>

                <Menu.Item key="Add a new Book" icon={<SettingOutlined />}>
                   <Link to="/account/Books/new" element={<BooksFormPage />} />
                    Add a new Book
                </Menu.Item>

                <Menu.SubMenu key="User Profile" icon={<AreaChartOutlined />} title="User Profile">
                    <Menu.Item key="Profile">
                        <Link to="/account/:subpage?" element={<ProfilePage />} />
                        My Profile
                    </Menu.Item>
                    <Menu.Item key="Logout">
                        Logout
                    </Menu.Item>
                </Menu.SubMenu>

            </Menu>
           
    );    
};