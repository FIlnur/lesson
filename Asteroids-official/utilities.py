import pygame


def draw_text(gameDisplay: pygame.Surface, msg, 
             color, x, y, size, center=True):
    '''Create function to draw texts'''
    screen_text = pygame.font.SysFont("Calibri", size).render(msg, True, color)
    if center:
        rect = screen_text.get_rect()
        rect.center = (x, y)
    else:
        rect = pygame.Rect (x, y, size, size)
    gameDisplay.blit(screen_text, rect)


def is_colliding(centerX: int, centerY: int, 
                centerXTo:int, centerYTo: int, radius: int):
    '''Create funtion to chek for collision'''
    is_horizontal_collided = (
        centerX > centerXTo - radius and 
        centerX < centerXTo + radius
    )
    is_vertical_collided = (
        centerY > centerYTo - radius and 
        centerY < centerYTo + radius
    )
    return is_horizontal_collided and is_vertical_collided
    