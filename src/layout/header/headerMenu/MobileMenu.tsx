import React, { useState } from 'react';
import { Menu } from './Menu';
import { S } from '../HeaderMenu_Styles';

export const MobileMenu: React.FC = () => {
    const [meniIsOpen, setmenuIsOpen] = useState(false)
    const onBurgerBtnClick = () => { setmenuIsOpen( !meniIsOpen ) }
	return (
		<S.MobileMenu>
            <S.BurgerButton isOpen={meniIsOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </S.BurgerButton>

            <S.MobileMenuPopup isOpen={meniIsOpen} onClick={()=>{setmenuIsOpen(false)}}>
                <Menu />
            </S.MobileMenuPopup>

		</S.MobileMenu>
	);
};

