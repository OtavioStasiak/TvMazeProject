import React, { ReactNode } from 'react';
import {
  View,
  Modal,
  ModalProps
} from 'react-native';

import { styles } from './styles';

type Props = ModalProps & {
  children: ReactNode;
  closeModal?: () => void;
}

export function ModalView({ children, closeModal, ...rest }: Props){
  return(
    <Modal
      transparent
      animationType="slide"
      statusBarTranslucent
      {...rest}>

        <View style={styles.overlay}>
                {children}
        </View>

    </Modal>
  );
}